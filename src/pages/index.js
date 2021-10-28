import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import products from '@data/products.json';

import styles from '@styles/Home.module.scss'

export default function Home() {
  // function handleOnSearch() {
  //   // Do something here
  // }
  return (
    <Layout>
      <Head>
        <title>Hyper Bros Trading</title>
        <meta name="description" content="Your favorite trading cards delivered!" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>

      <Container>
        <h1 className="sr-only">Hyper Bros. Trading Cards</h1>

        {/* <div className={styles.discover}>
          <div className={styles.search}>
            <h2>Search</h2>
            <form>
              <input onChange={handleOnSearch} type="search" />
            </form>
          </div>
        </div> */}

        <p className={styles.cart}>
          <FaShoppingCart />
          <span className="snipcart-total-price">
            $0.00
          </span>
          <Button className="snipcart-checkout">View Cart</Button>
        </p>

        <h2 className="sr-only">Available Cards</h2>
        <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Link href={`/products/${product.id}`}>
                  <a>
                    <div className={styles.productImage}>
                      <Image width="864" height="1200" src={product.image} alt={product.title} />
                    </div>
                    <h3 className={styles.productTitle}>
                      { product.title }
                    </h3>
                    <p className={styles.price}>
                      ${ product.price }
                    </p>
                  </a>
                </Link>
                <p>
                  <Button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-price={product.price}
                    data-item-url={`/products/${product.id}`}
                    data-item-image={product.image}
                    data-item-name={product.title}>
                    Add to Cart
                  </Button>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>

      <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"></script>
      <div hidden id="snipcart" data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}></div>
    </Layout>
  )
}