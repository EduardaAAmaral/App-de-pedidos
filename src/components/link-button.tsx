import { Link, LinkProps } from "expo-router";


type LinkButtonProps = LinkProps<string> & {
    title: string,
}


export function LinkButton({title, ...res}: LinkButtonProps){
    return (
        <Link className="text-slate-300 text-center text-base font-body" {...res}>
            {title}
        </Link>
    )
}