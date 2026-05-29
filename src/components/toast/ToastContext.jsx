import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const showToast = useCallback((message, variant = "success") => {
    setToast({ show: true, message, variant });
  }, []);

  const hideToast = useCallback(() => {
    setToast((t) => ({ ...t, show: false }));
  }, []);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
        <Toast
          bg={toast.variant}
          show={toast.show}
          onClose={hideToast}
          delay={2500}
          autohide
        >
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}

