import mongoose from 'mongoose';

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  website: String,
  logo: String,
  activePortals: {
    administrator: { type: Boolean, default: true },
    teacher: { type: Boolean, default: false },
    staff: { type: Boolean, default: false },
    parent: { type: Boolean, default: false },
    student: { type: Boolean, default: false }
  },
  services: {
    attendance: { type: Boolean, default: false },
    transport: { type: Boolean, default: false },
    homework: { type: Boolean, default: false },
    examGrading: { type: Boolean, default: false },
    communication: { type: Boolean, default: false },
    feeManagement: { type: Boolean, default: false },
    scheduling: { type: Boolean, default: false },
    reports: { type: Boolean, default: false },
    aiHelpers: { type: Boolean, default: false }
  },
  academicYear: {
    start: Date,
    end: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('School', schoolSchema);