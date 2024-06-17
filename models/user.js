// models/user.js
import mongoose from "mongoose";
const businessAddressSchema = new mongoose.Schema(
  {
    streetAddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    numberOfLocations: {
      type: Number,
      required: false, // change to true
    },
  },
  {
    timestamps: true,
  }
);
const businessHoursSchema = new mongoose.Schema(
  {
    monday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    tuesday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    wednesday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    thursday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    friday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    saturday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    sunday: {
      open: {
        type: [String],
        required: true,
      },
      close: {
        type: [String],
        required: true,
      },
      is24Hours: {
        type: Boolean,
        required: true,
        default: false,
      },
      isClosed: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);
const businessImageSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const categories = [
  "Restaurant",
  "Bar",
  "Coffee Shop",
  "Bakery",
  "Retail Store",
  "Salon/Barber",
  "Spa/Wellness",
  "Fitness/Gym",
  "Grocery Store",
  "Other",
];
const CategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true,
      default: "",
    },
    categoryName: {
      type: String,
      required: true,
      enum: categories,
    },
  },
  {
    timestamps: true,
  }
);
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
      default: null,
    },
    businessName: {
      type: String,
      required: false,
      default: null,
    },
    phoneNumber: {
      type: String,
      required: false,
      default: null,
    },
    businessWebsite: {
      type: String,
      required: false,
      default: null,
    },
    role: {
      type: String,
      required: true,
      default: "user",
    },
    authType: {
      type: String,
      required: true,
      default: "credentials",
    },
    picture: {
      type: String,
      required: false,
      default: "",
    },
    isProfileApproved: {
      type: Boolean,
      required: true,
      default: false,
    },
    typeOfBusiness: {
      type: String,
      required: false, // change to true
    },
    businessCategories: {
      type: [CategorySchema],
      required: false, // change to true
    },
    businessDescription: {
      type: String,
      required: false, // change to true
    },
    businessAddress: {
      type: businessAddressSchema,
      required: false,
      default: null,
    },
    isPhoneVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    businessHours: {
      type: businessHoursSchema,
      required: false, // change to true
    },
    businessImages: {
      type: [businessImageSchema],
      required: false, // change to true
    },
    resetToken: {
      type: String,
      required: false,
      default: "",
    },
    resetTokenExpiry: {
      type: Date,
      required: false,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.models.User || mongoose.model("User", userSchema);