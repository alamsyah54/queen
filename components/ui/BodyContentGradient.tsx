"use client"
import { cn } from "@/lib/utils"
import React from "react"
import { motion } from "framer-motion"

export const BodyContentGradient = ({
    children,
    className,
    containerClassName,
    animate = true,
}: {
    children?: React.ReactNode
    className?: string
    containerClassName?: string
    animate?: boolean
}) => {
    const variants = {
        initial: {
            backgroundPosition: "0 50%",
        },
        animate: {
            backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
        },
    }
    return (
        <div
            className={cn(
                "relative h-full p-[3px] group min-h-96 ",
                containerClassName
            )}
        >
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-[20px] z-[1] opacity-60 group-hover:opacity-100 blur-lg transition duration-500",
                    " bg-gray-100/30 dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#0284c7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#10b981,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#059669,transparent),radial-gradient(circle_farthest-side_at_0_0,#3b82f6,#0284c7)]"
                )}
            />
            <motion.div
                variants={animate ? variants : undefined}
                initial={animate ? "initial" : undefined}
                animate={animate ? "animate" : undefined}
                transition={
                    animate
                        ? {
                              duration: 5,
                              repeat: Infinity,
                              repeatType: "reverse",
                          }
                        : undefined
                }
                style={{
                    backgroundSize: animate ? "400% 400%" : undefined,
                }}
                className={cn(
                    "absolute inset-0 rounded-[20px] z-[1] ",
                    " bg-gray-100/30 dark:bg-[radial-gradient(circle_farthest-side_at_0_100%,#0284c7,transparent),radial-gradient(circle_farthest-side_at_100%_0,#10b981,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#059669,transparent),radial-gradient(circle_farthest-side_at_0_0,#3b82f6,#0284c7)]"
                )}
            />

            <div
                className={cn(
                    "relative z-10 h-full min-h-96 overflow-auto",
                    className
                )}
            >
                {children}
            </div>
        </div>
    )
}
