const NotFound = () => (
  <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}>
    <div>
      <p className="eyebrow">404</p>
      <h1 className="h2">Página não encontrada</h1>
      <p style={{ color: 'var(--ink-2)', marginBottom: 24 }}>O endereço que você abriu não existe neste portfólio.</p>
      <a className="btn primary" href="/">Voltar ao início</a>
    </div>
  </main>
);

export default NotFound;
