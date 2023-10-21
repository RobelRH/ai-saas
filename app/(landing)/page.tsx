import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      welcome to the public landing page
      <div>
        <Link href="/sign-in">
          <Button>
            Login
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  )
}
