"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  BarChart3,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Features
      </a>
      <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Testimonials
      </a>
      <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
        Pricing
      </a>
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight">Nexus</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
        </div>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth">
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link href="/auth">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-6 mt-10">
                  <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-medium">Features</a>
                  <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-lg font-medium">Testimonials</a>
                  <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-medium">Pricing</a>
                  <hr className="border-border" />
                  <Link href="/auth">
                    <Button className="w-full" onClick={() => setIsOpen(false)}>Get Started</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
