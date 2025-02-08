export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <p>
            <span className="font-bold">&copy; {currentYear} </span>
            Arttu H
          </p>
        </div>
      </footer>
    </>
  );
}
