interface FooterProps {
    year: number;
}

function calculateCurrentYear() {
    const today = new Date();
    return today.getFullYear();

}

export default function Footer({year}: FooterProps) {
    year = calculateCurrentYear();
    return (
      <>
        <footer className="text-center bg-Platinum lg:text-left dark:bg-Jet">
          <div className="p-4 text-center text-Glaucous">
            © {year} Copyright:&nbsp;
            <a className="text-Glaucous" href="https://bence.kolonics.fr/">
              Bence Kolonics
            </a>
          </div>
        </footer>
      </>
    );
}