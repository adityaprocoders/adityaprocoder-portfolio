const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  tech: { 
    type: [String], 
    required: true 
  },
  github: { 
    type: String, 
    default: "#" 
  },
  live: { 
    type: String, 
    default: "#" 
  }
});

module.exports = mongoose.model('Project', ProjectSchema);