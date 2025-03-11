import { Button } from "@/Components/ui/button";
import { Link, router } from "@inertiajs/react";
import React from "react";

const Show = ({id}) => {
    return (
        <>
            <Link href="/posts/{post}/edit">edit</Link>
            <Button onClick={() => router.delete("/post/{post}")}>Delete</Button>
        </>
    );
};

export default Show;
