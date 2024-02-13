// Imports
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useDragControls } from 'framer-motion';

// Assets
import { Button } from "@/components/ui/button";

interface DrawerProps {
  name?: string;
  date?: string;
  desc?: string;
  tools?: string[];
  link?: string;
  github?: string;
  isOpened: boolean;
  onClose: () => void;
}

const Drawer = ({ name, date, desc, tools, link, github, isOpened, onClose }: DrawerProps): JSX.Element => {
  const drawerRef = useRef<HTMLDivElement>(null);
  const dragControls = useDragControls();
  const y = useMotionValue(0);
  const [dragDirection, setDragDirection] = useState<number>(0);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpened) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpened, onClose]);

  return (
    <>
      {/* Background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpened ? 0.7 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full h-full bg-black z-40"
        style={{ pointerEvents: isOpened ? "auto" : "none" }}
      />
      {/* Draggable Drawer */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isOpened ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.3 }}
        dragControls={dragControls}
        style={{ y }}
        onDrag={(event, info) => {
          setDragDirection(info.velocity.y);
        }}
        onDragEnd={() => {
          if (dragDirection < 1000) {
            onClose();
          }
        }}
        className="fixed bottom-0 left-0 w-full h-auto bg-secondary z-50 rounded-t-[15px]"
        ref={drawerRef}
      >
        <motion.div
          drag="y"
          dragControls={dragControls}
          style={{ cursor: "grab", height: "20px", width: "100%", background: "transparent" }}
        />
        <div className='flex justify-center'>
          <div className='w-20 h-1 bg-primary rounded-[20px]'></div>
        </div>
        {/* Drawer Content */}
        <div className="flex justify-between items-center px-5 pt-3">
          <h1 className="text-2xl font-bold">{name}</h1>
        </div>
        <div className="flex flex-col px-5">
          <h2 className="text-lg font-bold">{date}</h2>
          <p className="text-md pt-3">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tools?.map((tool, index) => (
              <h4
                key={index}
                className="bg-primary px-3 py-1 rounded-[10px] text-sm font-semibold text-secondary cursor-default"
              >
                {tool}
              </h4>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-5 px-5 py-5">
          { link && (
            <Button onClick={() => window.open(link, "_blank")} variant="outline" className='w-20'>
              Visit
            </Button>
          )}
          <Button onClick={() => window.open(github, "_blank")} variant="outline" className='w-20'>
            Github
          </Button>
        </div>
      </motion.div>
    </>
  );
};

export default Drawer;
