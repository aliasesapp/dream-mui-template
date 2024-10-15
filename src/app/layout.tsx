import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { Metadata } from "next";
import { Viewport } from "next/types";
import { siteConfig } from "@/config/site";
import SiteHeader from "@/components/SiteHeader";
import { CustomThemeProvider } from "@/contexts/ThemeContext";
import Container from "@mui/material/Container";

const iconUrl =
  "https://raw.githubusercontent.com/aliasesapp/dreamstack-images/main/images/favicon";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: [
      { url: `${iconUrl}/favicon-16x16.png`, sizes: "16x16" },
      { url: `${iconUrl}/favicon-32x32.png`, sizes: "32x32" },
    ],
    shortcut: `${iconUrl}/favicon-16x16.png`,
    apple: `${iconUrl}/apple-touch-icon.png`,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  userScalable: false,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CustomThemeProvider>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <SiteHeader />
            <Container maxWidth="xl" sx={{ py: { xs: 2, md: 4 } }}>
              {props.children}
            </Container>
          </CustomThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
