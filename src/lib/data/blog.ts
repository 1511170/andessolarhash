export const blogPosts = [
  { slug: 'bitcoin-firme-100k', date: '15 May 2026', title: 'Bitcoin se mantiene firme sobre los $100.000', excerpt: 'Bitcoin continúa desafiando las expectativas del mercado con un soporte sólido por encima de los seis dígitos.' },
  { slug: 'senado-eeuu-borrador', date: '15 May 2026', title: 'El Senado de EE.UU. avanza con nuevo borrador', excerpt: 'La nueva propuesta legislativa podría impactar la regulación de activos digitales en los próximos meses.' },
  { slug: 'dogecoin-coinbase', date: '15 May 2026', title: 'Dogecoin despierta tras anuncio de Coinbase', excerpt: 'El listado en la plataforma impulsa el interés y el volumen de operaciones del activo.' },
  { slug: 'mineria-renovable-chile', date: '15 May 2026', title: 'Minería renovable gana terreno en Chile', excerpt: 'Proyectos solares y eólicos se consolidan como alternativa para operaciones más sustentables.' },
  { slug: 'hashrate-global-sube', date: '15 May 2026', title: 'El hashrate global de Bitcoin marca nuevo récord', excerpt: 'La capacidad de procesamiento de la red alcanza niveles históricos en medio de un ciclo alcista.' },
  { slug: 'asics-eficiencia-2026', date: '15 May 2026', title: 'ASICs de nueva generación mejoran eficiencia', excerpt: 'Fabricantes presentan equipos con menor consumo por TH en un contexto de costos energéticos altos.' },
  { slug: 'ethereum-layer2', date: '15 May 2026', title: 'Layer 2 de Ethereum superan en volumen a mainnet', excerpt: 'Las soluciones de escalabilidad concentran cada vez más transacciones y usuarios.' },
  { slug: 'latam-adopcion-cripto', date: '15 May 2026', title: 'Latam acelera adopción de cripto para pagos', excerpt: 'Empresas y gobiernos exploran usos de stablecoins y Bitcoin para transferencias y comercio.' },
  { slug: 'halving-impacto-mineros', date: '15 May 2026', title: 'Un año después del halving: impacto en mineros', excerpt: 'Análisis de rentabilidad y estrategias de las operaciones mineras tras la reducción de emisión.' },
  { slug: 'energia-solar-datos', date: '15 May 2026', title: 'Energía solar y centros de datos: tendencias 2026', excerpt: 'La combinación de energías renovables con infraestructura digital sigue creciendo a nivel global.' },
  { slug: 'regulacion-mineria-europa', date: '15 May 2026', title: 'Europa define marco para minería de criptoactivos', excerpt: 'MiCA y normativas nacionales comienzan a aplicarse a operadores de minería.' },
  { slug: 'nft-utility-mineria', date: '15 May 2026', title: 'NFTs con utilidad vinculada a minería real', excerpt: 'Proyectos que tokenizan participación en hashrate ganan atención de inversores.' },
  { slug: 'pool-mineria-latam', date: '14 May 2026', title: 'Pools de minería en Latam: panorama actual', excerpt: 'Análisis de los principales pools y su presencia en la región.' },
  { slug: 'cold-storage-institucional', date: '14 May 2026', title: 'Cold storage institucional: mejores prácticas', excerpt: 'Cómo grandes holders protegen sus activos en un entorno regulatorio cambiante.' },
  { slug: 'lightning-network-adopcion', date: '14 May 2026', title: 'Lightning Network: adopción y casos de uso', excerpt: 'El crecimiento de la segunda capa de Bitcoin en pagos y remesas.' },
  { slug: 'fusion-nuclear-datos', date: '13 May 2026', title: 'Energía y centros de datos: ¿fusión nuclear?', excerpt: 'Avances en fuentes de energía que podrían abastecer la industria.' },
  { slug: 'stables-regulacion', date: '13 May 2026', title: 'Stablecoins y regulación en 2026', excerpt: 'MiCA y otras normas impactan emisores y usuarios de stablecoins.' }
] as const;

export type BlogPost = (typeof blogPosts)[number];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
