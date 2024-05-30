import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div>
      <h1>404</h1>
      <div>
        <p>oops, não conseguimos encontrar essa página!</p>
        <span>Clique no botão abaixo para ser redirecionado à Pagina Inicial</span>
      </div>
      <Link href="/">Ir para a Página Inicial</Link>
      
    </div>
  );
}

export default Custom404;