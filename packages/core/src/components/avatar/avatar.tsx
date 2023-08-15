import React from "react";

const Avatar = React.forwardRef<HTMLSpanElement, any>((props, ref) => {
    return (
        <span ref={ref} className="flex items-center justify-center w-10 h-10 ring-2 ring-offset-2 ring-primary ring-offset-background">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="ramki a" />
        </span>
    )
})

Avatar.displayName = "Avatar";

export default Avatar;
