import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function SubmitQueryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('Form submitted:', data);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <Card className="w-full max-w-md mx-auto rounded-lg border-0">
      <CardHeader className="bg-teal-500 text-white rounded-t-lg">
        <CardTitle className="text-center">SUBMIT QUERY FORM</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="Name*"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              type="email"
              placeholder="Email Id"
              {...register('email', {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Mobile No.*"
              {...register('mobile', {
                required: 'Mobile number is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Invalid mobile number',
                },
              })}
            />
            {errors.mobile && (
              <p className="text-red-500 text-xs mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>
          <div className="flex space-x-2">
            <div className="w-1/2">
              <Input
                type="date"
                placeholder="Travel Date"
                {...register('travelDate')}
              />
            </div>
            <div className="w-1/2">
              <Input
                type="number"
                placeholder="No. of Adults"
                min="1"
                {...register('adults', {
                  required: 'Number of adults is required',
                  min: {
                    value: 1,
                    message: 'At least 1 adult is required',
                  },
                })}
              />
              {errors.adults && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.adults.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <Textarea
              placeholder="Requirement"
              {...register('requirement')}
              rows={3}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-gray-800 hover:bg-gray-900 text-white"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Enquiry'
            )}
          </Button>
        </form>
        {isSubmitted && (
          <p className="text-green-500 text-sm text-center mt-4">
            Your query has been submitted successfully!
          </p>
        )}
        <p className="text-xs text-center mt-4 text-gray-500">
          By clicking submit query I accept the privacy policy.
        </p>
      </CardContent>
    </Card>
  );
}
