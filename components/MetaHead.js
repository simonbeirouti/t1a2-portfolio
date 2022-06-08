import Head from "next/head";

export default function MetaHead({page, description}) {
    return (
        <Head>
            <title>Portfolio | {page}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
    )
}