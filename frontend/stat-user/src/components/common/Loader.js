import React, { Suspense } from "react";

export default function Loader(Component) {
    function Loading(params) {
        return (
            <Suspense fallback={<div> ...loading</div>}>
                <Component {...params} />
            </Suspense>
        );
    }
    return Loading;
}
