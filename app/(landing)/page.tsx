import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      AI SaaS application Visitors Page
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
