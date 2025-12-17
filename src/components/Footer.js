export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <p className="mb-1">
        © {new Date().getFullYear()} Royal Piano Service, Inc.
      </p>
      <p className="small">Keeping Atlanta in Tune</p>
    </footer>
  );
}
