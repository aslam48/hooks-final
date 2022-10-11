import React, { forwardRef,useImperativeHandle, useState } from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, serToggle] = useState(false);

    useImperativeHandle(ref, ()=> ({ 
        alterToggle(){
            serToggle(!toggle)
        },
    }));
  return (
    <div>
        <button>button from child</button>
        {toggle && <span>Toggle</span>}
    </div>
  );
});

export default Button  