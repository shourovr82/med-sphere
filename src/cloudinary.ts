import { v4 as uuidv4 } from "uuid";
import cloudinary, { UploadApiResponse } from "cloudinary";

const cloudinaryUploadPreset = "your_cloudinary_upload_preset";
const cloudinaryCloudName = "your_cloud_name";

cloudinary.config({
  cloud_name: cloudinaryCloudName,
});

interface CloudinaryWidgetResult {
  event: string;
  info: UploadApiResponse;
}

interface CloudinaryUploadOptions {
  cloudName: string;
  uploadPreset: string;
  sources: string[];
  cropping: boolean;
  multiple: boolean;
  defaultSource: string;
  styles: {
    palette: {
      window: string;
      sourceBg: string;
      windowBorder: string;
      tabIcon: string;
      inactiveTabIcon: string;
      menuIcons: string;
      link: string;
      action: string;
      inProgress: string;
      complete: string;
      error: string;
      textDark: string;
      textLight: string;
    };
    fonts: {
      default: null;
    };
  };
}

export const openUploadWidget = (
  callback: (result: CloudinaryWidgetResult) => void
) => {
  const uploadOptions: CloudinaryUploadOptions = {
    cloudName: cloudinaryCloudName,
    uploadPreset: cloudinaryUploadPreset,
    sources: ["local", "url", "camera"],
    cropping: true,
    multiple: false,
    defaultSource: "local",
    styles: {
      palette: {
        window: "#000",
        sourceBg: "#000",
        windowBorder: "#8E9FB1",
        tabIcon: "#2C3E50",
        inactiveTabIcon: "#CCC",
        menuIcons: "#2C3E50",
        link: "#8E9FB1",
        action: "#FF620C",
        inProgress: "#0078FF",
        complete: "#20B832",
        error: "#FF0000",
        textDark: "#000000",
        textLight: "#FFFFFF",
      },
      fonts: {
        default: null,
      },
    },
  };

  cloudinary.openUploadWidget(uploadOptions, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      callback(result as CloudinaryWidgetResult);
    }
  });
};
