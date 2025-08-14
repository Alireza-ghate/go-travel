import reactGA4 from "react-ga4";

// to make sure after our website loads , google analytics will be loaded and ready to use
export function initGoogleAnalytics() {
  reactGA4.initialize(import.meta.env.VITE_MEASUREMENT_ID);
}

// create specific function for any custome event
export function logPageView() {
  reactGA4.event("page_view", {
    page_location: window.location.href,
    page_title: document.title,
    page_path: window.location.pathname + window.location.search,
  }); //option obj holds all data that we need to send to google analytics when event(page_view) happens
}

interface customEventProps {
  eventName: string;
  category: string;
  action: string;
  customProps?: Record<string, string>; // means an obj which its key is string and its value also is string
}

export function logCustomEvent(props: customEventProps) {
  reactGA4.event(props.eventName, {
    category: props.category,
    action: props.action,
    ...props?.customProps,
  });
}
