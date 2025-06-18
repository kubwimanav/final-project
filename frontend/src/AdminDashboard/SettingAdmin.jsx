import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Eye,
  EyeOff,
  Settings,
  Info,
} from "lucide-react";

export default function SettingsPage() {
  const [publicProfile, setPublicProfile] = useState(false);
  const [loggedUser, setLoggedUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showAllData, setShowAllData] = useState(true);

  // Load user data on component mount
  useEffect(() => {
    const userData = localStorage.getItem("loggedUser");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setLoggedUser(parsedUser);
        setPublicProfile(parsedUser.publicProfile || false);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  const handleToggle = () => {
    setPublicProfile(!publicProfile);
  };

  const renderUserField = (label, value, icon) => (
    <div className="flex items-start justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center min-w-0 flex-1">
        {icon}
        <span className="text-sm font-medium text-gray-700 ml-2 min-w-0">
          {label}:
        </span>
      </div>
      <div className="ml-4 text-right min-w-0 flex-1">
        <span className="text-sm text-gray-900 break-words">
          {value || "Not provided"}
        </span>
      </div>
    </div>
  );

  if (!loggedUser) {
    return (
      <div className="max-w-5xl mx-auto p-4 bg-gray-50 min-h-screen rounded-2xl flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-sm">
          <User className="mx-auto h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">
            No User Logged In
          </h3>
          <p className="text-gray-600">Please log in to view profile details</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Settings className="h-6 w-6 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">
              User Profile Details
            </h1>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-gray-700 font-medium">
              Public Profile
            </span>
            <button
              onClick={handleToggle}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                publicProfile ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                  publicProfile ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Complete User Information Display */}
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Info className="mr-2 h-5 w-5 text-blue-600" />
              Complete User Information
            </h2>
            <button
              onClick={() => setShowAllData(!showAllData)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              {showAllData ? "Hide Raw Data" : "Show Raw Data"}
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* Profile Picture */}
          <div className="flex items-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-100 mr-6">
              {loggedUser.profilePicture ||
              loggedUser.avatar ||
              loggedUser.photo ? (
                <img
                  src={
                    loggedUser.profilePicture ||
                    loggedUser.avatar ||
                    loggedUser.photo
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-blue-100 flex items-center justify-center">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">
                {loggedUser.name ||
                  loggedUser.fullName ||
                  loggedUser.username ||
                  "Unknown User"}
              </h3>
              <p className="text-gray-600 text-lg">
                {loggedUser.email || "No email provided"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                User ID: {loggedUser.userId || loggedUser.id || "Not assigned"}
              </p>
            </div>
          </div>

          {/* All User Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Information */}
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center text-lg">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Personal Information
              </h4>

              {renderUserField(
                "Full Name",
                loggedUser.name || loggedUser.fullName,
                <User className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "First Name",
                loggedUser.firstName,
                <User className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Last Name",
                loggedUser.lastName,
                <User className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Username",
                loggedUser.username,
                <User className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Email",
                loggedUser.email,
                <Mail className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Phone",
                loggedUser.phone || loggedUser.phoneNumber,
                <Phone className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Gender",
                loggedUser.gender,
                <User className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Date of Birth",
                loggedUser.dateOfBirth || loggedUser.dob,
                <Calendar className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Age",
                loggedUser.age,
                <Calendar className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Bio",
                loggedUser.bio || loggedUser.description,
                <User className="h-4 w-4 text-gray-500" />
              )}
            </div>

            {/* Location Information */}
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center text-lg">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                Location & Contact
              </h4>

              {renderUserField(
                "Country",
                loggedUser.country,
                <MapPin className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "State/Province",
                loggedUser.state || loggedUser.province,
                <MapPin className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "City",
                loggedUser.city,
                <MapPin className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Address",
                loggedUser.address,
                <MapPin className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Postal Code",
                loggedUser.postalCode || loggedUser.zipCode,
                <MapPin className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Secondary Email",
                loggedUser.secondaryEmail,
                <Mail className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Work Phone",
                loggedUser.workPhone,
                <Phone className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Emergency Contact",
                loggedUser.emergencyContact,
                <Phone className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Website",
                loggedUser.website,
                <User className="h-4 w-4 text-gray-500" />
              )}
              {renderUserField(
                "Social Media",
                loggedUser.socialMedia,
                <User className="h-4 w-4 text-gray-500" />
              )}
            </div>
          </div>

          {/* Account & Security Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-4 flex items-center text-lg">
              <Shield className="h-5 w-5 mr-2 text-blue-600" />
              Account & Security
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                {renderUserField(
                  "User ID",
                  loggedUser.userId || loggedUser.id,
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Password",
                  showPassword ? loggedUser.password : "••••••••",
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-500" />
                    )}
                  </button>
                )}
                {renderUserField(
                  "Account Type",
                  loggedUser.accountType || loggedUser.userType,
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Role",
                  loggedUser.role,
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Status",
                  loggedUser.status || loggedUser.accountStatus,
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
              </div>
              <div className="space-y-1">
                {renderUserField(
                  "Verified",
                  loggedUser.verified || loggedUser.isVerified ? "Yes" : "No",
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Premium",
                  loggedUser.premium || loggedUser.isPremium ? "Yes" : "No",
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Two Factor Auth",
                  loggedUser.twoFactorEnabled ? "Enabled" : "Disabled",
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Login Attempts",
                  loggedUser.loginAttempts,
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
                {renderUserField(
                  "Public Profile",
                  publicProfile ? "Yes" : "No",
                  <Shield className="h-4 w-4 text-gray-500" />
                )}
              </div>
            </div>
          </div>

          {/* Additional Fields - Any other properties in the user object */}
          {Object.keys(loggedUser).length > 0 && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-4 flex items-center text-lg">
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                Additional Information
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  {Object.entries(loggedUser)
                    .filter(
                      ([key]) =>
                        ![
                          "name",
                          "fullName",
                          "firstName",
                          "lastName",
                          "username",
                          "email",
                          "phone",
                          "phoneNumber",
                          "gender",
                          "dateOfBirth",
                          "dob",
                          "age",
                          "bio",
                          "description",
                          "country",
                          "state",
                          "province",
                          "city",
                          "address",
                          "postalCode",
                          "zipCode",
                          "secondaryEmail",
                          "workPhone",
                          "emergencyContact",
                          "website",
                          "socialMedia",
                          "userId",
                          "id",
                          "password",
                          "accountType",
                          "userType",
                          "role",
                          "status",
                          "accountStatus",
                          "verified",
                          "isVerified",
                          "premium",
                          "isPremium",
                          "twoFactorEnabled",
                          "loginAttempts",
                          "publicProfile",
                          "profilePicture",
                          "avatar",
                          "photo",
                        ].includes(key)
                    )
                    .slice(0, Math.ceil(Object.keys(loggedUser).length / 2))
                    .map(([key, value]) =>
                      renderUserField(
                        key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1"),
                        typeof value === "object"
                          ? JSON.stringify(value)
                          : String(value),
                        <Info className="h-4 w-4 text-gray-500" />
                      )
                    )}
                </div>
                <div className="space-y-1">
                  {Object.entries(loggedUser)
                    .filter(
                      ([key]) =>
                        ![
                          "name",
                          "fullName",
                          "firstName",
                          "lastName",
                          "username",
                          "email",
                          "phone",
                          "phoneNumber",
                          "gender",
                          "dateOfBirth",
                          "dob",
                          "age",
                          "bio",
                          "description",
                          "country",
                          "state",
                          "province",
                          "city",
                          "address",
                          "postalCode",
                          "zipCode",
                          "secondaryEmail",
                          "workPhone",
                          "emergencyContact",
                          "website",
                          "socialMedia",
                          "userId",
                          "id",
                          "password",
                          "accountType",
                          "userType",
                          "role",
                          "status",
                          "accountStatus",
                          "verified",
                          "isVerified",
                          "premium",
                          "isPremium",
                          "twoFactorEnabled",
                          "loginAttempts",
                          "publicProfile",
                          "profilePicture",
                          "avatar",
                          "photo",
                        ].includes(key)
                    )
                    .slice(Math.ceil(Object.keys(loggedUser).length / 2))
                    .map(([key, value]) =>
                      renderUserField(
                        key.charAt(0).toUpperCase() +
                          key.slice(1).replace(/([A-Z])/g, " $1"),
                        typeof value === "object"
                          ? JSON.stringify(value)
                          : String(value),
                        <Info className="h-4 w-4 text-gray-500" />
                      )
                    )}
                </div>
              </div>
            </div>
          )}

          {/* Raw Data Section */}
          {showAllData && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-4">
                Complete Raw User Data (JSON)
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg border">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap overflow-auto max-h-80">
                  {JSON.stringify(loggedUser, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
