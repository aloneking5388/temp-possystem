import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Multi-store Management",
  "Real-time Billing",
  "Inventory Tracking",
  "Staff Roles & Permissions",
  "Sales Reports",
  "Cloud Backup",
  "UPI + Card + Cash Payments",
  "POS Mobile App (Android/iOS)",
  "Smart Analytics Dashboard",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <Image
          src="/logo.png"
          alt="NasiPOS Logo"
          width={180}
          height={180}
          className="mx-auto"
        />
        <p className="mt-2 text-lg text-gray-600">
          Smart Cloud POS System for Supermarkets & Retailers
        </p>
        <p className="mt-2 text-md text-green-600 font-semibold">
          Launching Soon in 2025
        </p>
        <Button className="mt-6 px-6 py-3 text-lg rounded-xl">Join Waitlist</Button>
      </div>

      <section className="mt-14 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="flex items-center gap-3 py-6">
                <CheckCircle className="text-green-500" />
                <p className="text-gray-700 font-medium">{feature}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="mt-24 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NasiPOS. All rights reserved. |
        support@nasipos.com
      </footer>
    </main>
  );
}

