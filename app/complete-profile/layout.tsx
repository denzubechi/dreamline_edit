import Header from "./component/header"
export default function ContactLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
 
        {children}
      </section>
    )
  }