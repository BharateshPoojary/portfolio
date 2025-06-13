import { Html } from "@react-email/components";
interface EmailTemplateProps {
  userName: string;
  message: string;
}

export const EmailTemplate = ({
  userName,
  message,
}: Readonly<EmailTemplateProps>) => {
  return (
    <Html lang="en">
      <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              New Message Received
            </h1>
            <p className="text-gray-600 text-sm">
              You have received a new message that requires your attention
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* From Section */}
          <div className="mb-6">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">From</p>
                  <h3 className=" text-gray-900">{userName}</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Message Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center">
              <svg
                className="w-5 h-5 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Message Content
            </h3>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300">
              <blockquote className="text-gray-700 text-base leading-relaxed italic">
                {message}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
};
