{/* Esto es la cabecera de la pagina */}

export const metadata = {
  title: 'Grupo G06 - G12 Estadística y Probabilidad',
  description: 'Proyecto semestral de Estadística y Probabilidad',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
