"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const features = [
  { title: "Multi-store Management", image: "/icons/store.svg" },
  { title: "Inventory Tracking", image: "/icons/inventory.svg" },
  { title: "Real-time Billing", image: "/icons/bill.svg" },
  { title: "Smart Analytics Dashboard", image: "/icons/analytics.svg" },
];

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <main className="relative min-h-screen transition-colors duration-500 bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-200 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 animate-pulse opacity-10">
        <div className="absolute top-5 right-5 z-10">
            {mounted && (
          <Button
            variant="outline"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            {theme === "dark" ? "Light" : "Dark"}
          </Button>
        )}
        </div>
      </div>

      <section className="text-center px-6">
        <Image
          src="/logo.png"
          alt="NasiPOS Logo"
          width={150}
          height={150}
          className="mx-auto mb-2"
        />
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Smart Cloud POS System for Supermarkets & Retailers
        </p>
        <p className="mt-2 text-md text-green-600 font-semibold">
          Launching Soon in 2025 🚀
        </p>
      </section>

      <section className="mt-3 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-5">Key Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 py-3 px-4 shadow-md hover:shadow-lg transition-all"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={150}
                height={70}
                className="mx-auto mb-2 object-contain rounded-lg"
              />
              <p className="text-center font-medium text-gray-800 dark:text-gray-100">
                {feature.title}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mt-5 max-w-xl mx-auto text-center px-4">
        <h3 className="text-xl font-semibold mb-4">Stay in the loop</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Subscribe to get the latest updates when we launch.
        </p>
        <form className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md w-full sm:w-64 border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800"
          />
          <button
            type="submit"
            className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      </section>

      {mounted && (
        <footer className="mt-5 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} NasiPOS. All rights reserved. |
          support@nasipos.com
        </footer>
      )}
    </main>
  );
}
