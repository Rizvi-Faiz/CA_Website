import { CheckCircle } from "lucide-react";

const RulesPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tax Rules & Regulations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Income Tax Rules</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Income Tax Rules, 1962</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>TDS/TCS Compliance Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Depreciation Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Capital Gains Rules</span>
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline">View All Income Tax Rules</button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">GST Rules</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>CGST Rules, 2017</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Input Tax Credit Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>E-Way Bill Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Return Filing Rules</span>
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline">View All GST Rules</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Company Law Rules</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Companies (Incorporation) Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Companies (Accounts) Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Companies (Audit and Auditors) Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Companies (CSR Policy) Rules</span>
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline">View All Company Rules</button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">FEMA Rules</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Foreign Exchange Management Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>FDI Policy Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>Overseas Investment Rules</span>
            </li>
            <li className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              <span>ECB Guidelines</span>
            </li>
          </ul>
          <button className="mt-4 text-blue-600 hover:underline">View All FEMA Rules</button>
        </div>
      </div>
    </div>
  );
  
  export default RulesPage;