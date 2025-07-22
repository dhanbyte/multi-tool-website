// app/dashboard/image-hosting/page.tsx
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";
import MoreToolsSection from "@/components/MoreToolsSection";

export const metadata = {
  title: "Free Image Hosting | Upload & Share Images Instantly",
  description: "Upload and host your images securely. Share image links with ease using our free image hosting tool.",
  keywords: [
    "Image compressor",
    "Compress image online",
    "image compressor sizer",
    "free image compressor",
    "image compressor to 50kb",
    "discord images compressor site",
    "image compressor tinify",
    "image compressor sizer",
    "discord images compressor site",
    "image compressor tinify",
  ],
  openGraph: {
    title: "Free Image Hosting Tool",
    description: "Host and share images online without hassle. Fast, reliable, and totally free.",
    url: "https://dhanbyte.me/dashboard/image-hosting",
    siteName: "MultiTool by Dhanbyte",
    images: [
      {
        url: "https://ik.imagekit.io/b5qewhvhb/New%20Folder/ChatGPT%20Image%20Jul%2020,%202025,%2011_38_49%20AM.png?updatedAt=1752991986819",
        width: 1200,
        height: 630,
        alt: "Image Hosting - MultiTool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Hosting Tool",
    description: "Upload and share images for free. No sign-up needed.",
    images: [
      "https://ik.imagekit.io/b5qewhvhb/New%20Folder/ChatGPT%20Image%20Jul%2020,%202025,%2011_38_49%20AM.png?updatedAt=1752991986819",
    ],
  },
  alternates: {
    canonical: "https://dhanbyte.me/dashboard/image-hosting",
  },
  metadataBase: new URL("https://dhanbyte.me"),
};

const ImageHostingPage = dynamic(() => import("../../../components/image-hosting"), {
  ssr: true,
  loading: () => (
    <div className="flex justify-center items-center h-[50vh]">
      <Loader2 className="animate-spin h-6 w-6 text-primary" />
      <span className="ml-2">Loading Image Hosting Tool...</span>
    </div>
  ),
});

export default function Page() {
  return (
    <>
      <ImageHostingPage />
      <MoreToolsSection />
    </>
  );
}
