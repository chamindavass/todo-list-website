import React from 'react';
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import "./globals.css";

const e = React.createElement;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: " Todo List",
  description: " todo list application built with Next.js",
};

const RootLayout = ({ children }) => {
  return e('html', { lang: 'en' },
    e('body', {
      className: `${geistSans.variable} ${geistMono.variable} antialiased`
    },
      children
    )
  );
};

export default RootLayout;

