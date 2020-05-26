import Head from 'next/head';
import Layout from '../components/Layout';
import { Row, Col } from 'reactstrap';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mainDiv">
      <Layout />
      <div className="subDiv">
        <Row>
          <h1>Hello</h1>
        </Row>
      </div>
    </div>
  )
}
