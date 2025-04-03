import { Download } from "lucide-react";

const FormsPage = () => (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Tax Forms & Documents</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Income Tax Forms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">ITR-1 (Sahaj)</h3>
            <p className="text-sm text-gray-600 mb-2">For individuals with income from salary, one house property, and other sources</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">ITR-2</h3>
            <p className="text-sm text-gray-600 mb-2">For individuals and HUFs not having income from business or profession</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">ITR-3</h3>
            <p className="text-sm text-gray-600 mb-2">For individuals and HUFs having income from business or profession</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">ITR-4 (Sugam)</h3>
            <p className="text-sm text-gray-600 mb-2">For presumptive income from business and profession</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">GST Forms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">GSTR-1</h3>
            <p className="text-sm text-gray-600 mb-2">Monthly/Quarterly return for outward supplies</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">GSTR-3B</h3>
            <p className="text-sm text-gray-600 mb-2">Monthly summary return</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">GSTR-9</h3>
            <p className="text-sm text-gray-600 mb-2">Annual return</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">GSTR-9C</h3>
            <p className="text-sm text-gray-600 mb-2">Annual reconciliation statement</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">TDS/TCS Forms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">Form 16</h3>
            <p className="text-sm text-gray-600 mb-2">TDS certificate for salary</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">Form 16A</h3>
            <p className="text-sm text-gray-600 mb-2">TDS certificate for non-salary payments</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">Form 26AS</h3>
            <p className="text-sm text-gray-600 mb-2">Annual tax statement</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
          
          <div className="p-4 border rounded hover:bg-gray-50">
            <h3 className="font-medium">Form 27EQ</h3>
            <p className="text-sm text-gray-600 mb-2">Quarterly TCS return</p>
            <button className="text-blue-600 hover:underline flex items-center">
              <Download className="h-4 w-4 mr-1" />
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

export default FormsPage;