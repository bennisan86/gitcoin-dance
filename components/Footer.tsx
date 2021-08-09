import { useContext } from "react";
import Image from 'next/image';
import footerLogo from '../public/assets/img/footer_logo.svg';
import Link from "next/link";

export default function Footer() {

  return (
    <div className="footer flex items-center px-10 py-8 md:h-40 md:px-14 md:py-0 lg:px-10 lg:h-80 xl:px-0">
      <div className="container mx-auto px-0">
        <div className="lg:flex lg:justify-between py-15">
          <div className="md:flex md:items-stretch">
          {/* Placeholder for logo */}
          <Link href="/" passHref={true}>
            <a className="text-2xl font-bold self-end">
              <Image src={footerLogo}  alt="logo"/>
            </a>
          </Link>
          <p className="info self-end text-base md:pl-10 md:w-2/4">
            gitcoin.dance is an initiative by
            <Link href="/" passHref={true}>
              <a className="underline"> Gitcoin</a>
            </Link>.
            App created by
            <Link href="/" passHref={true}>
              <a className="underline"> PerfectPool</a>
            </Link> and 
            <Link href="/" passHref={true}>
              <a className="underline"> Raid Guild</a>
            </Link>.
          </p>
          </div>
          <div className="block pt-6 md:pt-0 md:flex md:mt-5 md:divide-x md:divide-purple-800 lg:block lg:mt-0 lg:divide-x-0 lg:self-end">
            <p className="text-base underline text-indigo md:pr-3 lg:text-right">
              <Link href="/" passHref={true}>
                gitcoin.co
              </Link>
            </p>
            <p className="text-base underline text-indigo md:px-3 lg:text-right lg:pt-2">
              <Link href="/" passHref={true}>
                raidguild.org
              </Link>
            </p>
            <p className="text-base underline text-indigo md:px-3 lg:text-right lg:pt-2">
              <Link href="/" passHref={true}>
                perfectpool.io
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}