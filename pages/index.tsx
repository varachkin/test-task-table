import {useEffect} from "react";
import {useRouter} from "next/router";
import {useAppSelector} from "../hooks/hooks";
import Loader from "../components/Loader";

export default function Home() {
    const router = useRouter();
    const {page} = useAppSelector(state => state.tableReducer)

    useEffect(() => {
        router.push(`${page}`)
    }, [router]);

    return (
        <Loader/>
    )
}
