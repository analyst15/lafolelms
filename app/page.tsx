import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
    <p className="text-3xl font-medium text-orange-700">hello world</p>
    <Button>
    yes this is a button
    </Button>
    </div>
  );
}
