import footer from "../../assets/footer.png"

export function Footer() {
  return (
    <footer className="relative overflow-hidden w-full" aria-label="Footer">
      <img
        src={footer}
        alt=""
        className="w-full object-cover object-top min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
        style={{ height: 'auto', maxHeight: '601px' }}
        aria-hidden="true"
        loading="lazy"
      />
    </footer>
  )
}
