import React, { useEffect, useState } from "react";
import axios from "axios";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

function DynamicForm() {
  const [fields, setFields] = useState([]);
  const [form, setForm] = useState({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:7000/api/contact")
      .then(res => {
        setFields(res.data.fields || []);
        // Initialize form state based on fields
        const initial = {};
        (res.data.fields || []).forEach(f => { initial[f.name] = ""; });
        setForm(initial);
      })
      .catch(() => setStatus("Failed to load form schema"));
  }, []);

  const handleChange = (name, value) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting...");
    axios.post("http://localhost:7000/api/contact", form)
      .then(() => {
        setStatus("Form submitted successfully!");
        setIsSubmitting(false);
        setForm(fields.reduce((acc, f) => ({ ...acc, [f.name]: "" }), {}));
        setTimeout(() => setStatus(""), 4000);
      })
      .catch(() => {
        setStatus("Submission failed!");
        setIsSubmitting(false);
      });
  };

  if (!fields.length) return <div>Loading form...</div>;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {fields.map(field => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-semibold text-gray-700 mb-3"
          >
            {field.label} {field.required && "*"}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              rows={field.rows || 6}
              value={form[field.name]}
              onChange={e => handleChange(field.name, e.target.value)}
              required={field.required}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-lg"
              placeholder={field.placeholder || ""}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              value={form[field.name]}
              onChange={e => handleChange(field.name, e.target.value)}
              required={field.required}
              className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg"
              placeholder={field.placeholder || ""}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700 transform hover:scale-105 shadow-lg hover:shadow-xl"
        } text-white`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      {status && (
        <div className={`flex items-center gap-3 p-4 rounded-xl ${
          status.toLowerCase().includes("success")
            ? "bg-green-100 text-green-800 border border-green-200"
            : "bg-blue-100 text-blue-800 border border-blue-200"
        }`}>
          {status.toLowerCase().includes("success") ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="font-medium">{status}</span>
        </div>
      )}
    </form>
  );
}

export default DynamicForm;