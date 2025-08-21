
type props = {
    params: Promise<{articlesId:string}>;
    searchParams: Promise<{lang: "en" | "fr"}>
}

export default async function Article({params, searchParams} : props) {

    const {articlesId} = await params
    const {lang} = await searchParams

    console.log("RESULTS",articlesId,lang)
    return(
        <h1>Article {articlesId} is in {lang}</h1>
    )
}