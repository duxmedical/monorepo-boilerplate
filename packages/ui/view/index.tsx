import {
  View as ReactNativeView,
  ViewProps as RNViewProps,
} from "react-native";
import { cssInterop } from "nativewind";
import React from "react";
import clsx from "clsx";

interface ViewProps extends RNViewProps {
  children: React.ReactNode;
  className?: string;
}

cssInterop(ReactNativeView, {
  className: "style",
});
export const View = React.forwardRef<
  React.ElementRef<typeof ReactNativeView> & ViewProps,
  ViewProps
>(({ children, className, ...props }, ref) => {
  return (
    <ReactNativeView
      ref={ref}
      {...props}
      className={clsx(className, "bg-stone-400")}
    >
      {children}
    </ReactNativeView>
  );
});

View.displayName = "View";
