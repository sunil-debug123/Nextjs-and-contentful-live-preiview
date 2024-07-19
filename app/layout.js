import { ContentfulPreviewProvider } from "@/components/contentful-preview-provider";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

export const metadata = {
  title: "Live Preview Example",
};

/* Uncomment this and set up the revalidation of your server pages as needed. */
// export const revalidate = 300;

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="bg-blue-200 w-full">
          <div className="flex flex-row px-4 md:px-20 lg:px-40 py-10">
          </div>
        </div>

        <ContentfulPreviewProvider locale="en-US">
          {children}
        </ContentfulPreviewProvider>
        <div>
          <div className="bg-blue-200 w-full py-20 text-center"></div>
        </div>
      </body>
    </html>
  );
}
