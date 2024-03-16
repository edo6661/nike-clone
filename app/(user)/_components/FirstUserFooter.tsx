"use client";
import { Heading } from "@/components/custom/heading";
import { topFooterItems } from "@/constants/userHomepage";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MdOutlineExpandMore } from "react-icons/md";
import { cn } from "@/lib/utils";

const FirstUserFooter = () => {
  const [expand, setExpand] = useState(false);

  const toggleExpand = () => setExpand((prev) => !prev);

  const sliceItemBasedOnHover = (items: string[]) =>
    expand ? items : items.slice(0, 4);

  return (
    <>
      <motion.div layout className="container-first-footer">
        {topFooterItems.map((item) => (
          <motion.div layout key={item.title}>
            <Heading as="h6" size="sm">
              {item.title}
            </Heading>
            <motion.ul layout>
              {sliceItemBasedOnHover(item.items).map((subItem) => (
                <li key={subItem}>{subItem}</li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
      <Button
        size="icon"
        variant="ghost"
        className="mx-auto min-h-16 w-full rounded-none"
        onClick={toggleExpand}
      >
        <MdOutlineExpandMore
          className={cn("base-transition", {
            "rotate-180": expand,
          })}
          size="42"
        />
      </Button>
    </>
  );
};

export default FirstUserFooter;
