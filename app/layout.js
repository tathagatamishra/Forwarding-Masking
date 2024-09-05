import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://theeliteenterprise.com"),
  title: {
    default: "Qviq - Create Share Connect | Free Website Builder",
    template: "%s | Qviq",
  },
  description:
    "Create your free customizable website with theeliteenterprise.com. Easy-to-use website builder with free domain and professionally designed templates.",
  keywords: [
    "free website",
    "free domain",
    "customizable website",
    "website builder",
    "website design",
    "website template",
    "created with theeliteenterprise.com",
  ],
  openGraph: {
    type: "website",
    url: "https://theeliteenterprise.com",
    siteName: "Qviq",
    title: "Qviq - Create Share Connect | Free Website Builder",
    description:
      "Create your free customizable website with theeliteenterprise.com. Easy-to-use website builder with free domain and professionally designed templates.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Qviq Website Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qviq - Create Share Connect | Free Website Builder",
    description:
      "Create your free customizable website with theeliteenterprise.com. Easy-to-use website builder with free domain and professionally designed templates.",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
