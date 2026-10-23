import React from 'react';
import { X, Check, Server, Key, Mail, Copy } from 'lucide-react';

interface SmtpGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SmtpGuideModal: React.FC<SmtpGuideModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const envSnippet = `# Hostinger Business Email SMTP Configuration
SMTP_HOST="smtp.hostinger.com"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="contact@delmostech.com"
SMTP_PASS="your_hostinger_email_password"
CONTACT_RECEIVER_EMAIL="alfaizkhan.tech@gmail.com"`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(envSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Hostinger SMTP Setup Guide</h3>
            <p className="text-xs text-slate-500">Configure real email dispatch in 2 minutes</p>
          </div>
        </div>

        <div className="space-y-4 text-xs md:text-sm text-slate-600 mt-4">
          <p>
            Your contact form backend in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono">server.ts</code> is already fully wired with <strong>Nodemailer</strong>. Simply add your Hostinger credentials to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-600 font-mono">.env</code>:
          </p>

          <div className="relative bg-slate-900 text-slate-200 rounded-xl p-4 font-mono text-xs overflow-x-auto">
            <button
              onClick={copyToClipboard}
              className="absolute top-3 right-3 px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-xs flex items-center gap-1 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <pre className="pr-16 leading-relaxed">{envSnippet}</pre>
          </div>

          <div className="space-y-2 bg-slate-50 rounded-xl p-4 border border-slate-200/80">
            <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wide">Where to get credentials in Hostinger:</h4>
            <ol className="list-decimal list-inside space-y-1.5 text-xs text-slate-600">
              <li>Log into your <strong>Hostinger hPanel</strong></li>
              <li>Go to <strong>Emails</strong> &gt; Select your domain</li>
              <li>Choose <strong>Email Accounts</strong> &gt; Connect Device / Webmail</li>
              <li>Copy the outgoing SMTP server (<code className="text-blue-600 font-mono">smtp.hostinger.com</code>, Port 465 SSL)</li>
              <li>Use your email address as <code className="text-blue-600 font-mono">SMTP_USER</code> and your mailbox password as <code className="text-blue-600 font-mono">SMTP_PASS</code></li>
            </ol>
          </div>

          <p className="text-xs text-slate-500 italic">
            * Note: While in local dev or without credentials, inquiries are safely logged and stored in memory so testing will always succeed smoothly.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Got it, thanks
          </button>
        </div>
      </div>
    </div>
  );
};
