import React from 'react';

function a(){
    return new Date().getFullYear();
}

export default function Footer1(){
return (
    <div>
        <p>All Rights Reserved &copy; {a()}</p>
    </div>
);
}