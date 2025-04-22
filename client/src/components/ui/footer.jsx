export default function Footer() {
  return (
    <div className=" text-black px-16 py-6 bg-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} E-Commerce. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="/terms" className="text-sm hover:underline mr-4">
            Terms of Service
          </a>
          <a href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
