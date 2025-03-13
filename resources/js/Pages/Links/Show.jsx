import Layout from "@/Components/layout/Layout";
import { Button } from "@/Components/ui/button";
import { Link, router } from "@inertiajs/react";
import { Edit, Trash } from "lucide-react";
import React from "react";

const Show = ({id = 1}) => {
    return (
        <div className="flex justify-center items-center p-8">
            <Link 
                href={`/links/${id}/edit`}
                className='flex justify-center items-center text-primary hover:border-[#e2e2e2] border-4 border-[#FF00FF]/20 transition-colors p-2 m-2 text-lg'
                style={{ textShadow: "1px 1px 0px #FF00FF" }}
            >
                <Edit className="p-1"/> Edit
            </Link>
            <Button 
                onClick={() => router.delete(`/links/${id}`)}
                className='flex text-primary hover:text-[#FF00FF] hover:border-[#FF00FF] bg-transparent hover:bg-transparent cursor-pointer border-4 border-[#FF00FF]/20 transition-colors p-5.5 m-2 rounded-none text-lg'
                style={{ textShadow: "1px 1px 0px #FF00FF" }}
            >
                <Trash />
                Delete
            </Button>
        </div>
    );
};
Show.layout = (page) => <Layout children={page} />;
export default Show;
