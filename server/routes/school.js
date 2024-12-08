import express from 'express';
import multer from 'multer';
import { validateSchool } from '../validators/school.js';
import School from '../models/School.js';
import { auth, isAdmin } from '../middleware/auth.js';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', auth, isAdmin, upload.single('logo'), validateSchool, async (req, res) => {
  try {
    const schoolData = {
      ...req.body,
      logo: req.file?.path
    };

    const school = new School(schoolData);
    await school.save();

    res.status(201).json(school);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const school = await School.findById(req.params.id);
    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }
    res.json(school);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.patch('/:id', auth, isAdmin, upload.single('logo'), async (req, res) => {
  try {
    const updates = {
      ...req.body,
      ...(req.file && { logo: req.file.path })
    };

    const school = await School.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    );

    if (!school) {
      return res.status(404).json({ error: 'School not found' });
    }

    res.json(school);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;