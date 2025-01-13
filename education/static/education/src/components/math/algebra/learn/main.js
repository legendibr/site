import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
    useEffect(() => {
        try {
            document.querySelector('.title').style.display = 'none';
            document.querySelectorAll('.method').forEach(method => {
                method.style.display = 'none';
            });
        }
        catch (e) {

        }

        return () => {
            try {
                document.querySelector('.title').style.display = 'block';
                document.querySelectorAll('.method').forEach(method => {
                    method.style.display = 'block';
                });
            }
            catch (e) {

            }
        }
    }, []);

    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Main;